import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Button, createStyles, InputBase, List, ListItem, ListItemText, makeStyles, Theme} from '@material-ui/core';
import { useRootStore } from '../rootStateContext';
import { useRef } from 'react';
import LinkCreationRequest from '../model/linkCreationRequest';
import LinkCreationResponse from '../model/linkCreationResponse';
import { API_URL } from '../api/linkApi';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: {
        display: "flex",
        width: "30vw",
        padding: "10px",
        borderRadius: 15,
        backgroundColor: theme.palette.secondary.main
    },
    input: {
        width: "100%",
        backgroundColor: theme.palette.secondary.main,
        fontSize: "x-large",
        borderRadius: 15,
        marginLeft: 15,
        marginRight: 15
    },
    mainWrap: {
        display: "flex",
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        backgroundColor: theme.palette.info.main
    },
    list: {
        marginTop: "5vh",
        borderRadius: 15,
        backgroundColor: theme.palette.secondary.main,
    },
    listItem: {
        width: "30vw",
        display: "grid",
        "grid-template-columns": "1fr auto 1fr",
    },
    link: {
        textAlign: "right",
        whiteSpace: "nowrap",
        justifySelf: "flex-end",
    }
    
  }),
);

export default observer((): JSX.Element => {
    const classes = useStyles();
    const urlInput = useRef<HTMLInputElement>();
    const { linkStore } = useRootStore()

    const [createdLinks, setCreatedLinks] = useState<LinkCreationResponse[]>([]);

    const createLink = async (): Promise<void> => {
        if (urlInput?.current?.value) {
            const request: LinkCreationRequest = { url: urlInput.current.value }
            try {
                const createdLink = await linkStore.createLink(request);
                setCreatedLinks( (previousState) => [...previousState, createdLink]);
            } catch (e) {
                console.error(e);
            }
        }
    }   

    return (  
    <div className={classes.mainWrap}>
        <div className={classes.form} onKeyPress={(e) => { if (e.key === "Enter") createLink()} }>
        <InputBase
          className={classes.input}
          // onChange={setVal}
          placeholder="URL"
          inputRef={urlInput}
          inputProps={{ "aria-label": "url" }}
        />
         <Button variant="contained"  className={classes.button} onClick={createLink}>
        Shorten
      </Button>
    </div>

        <div className={classes.list}>
        <List dense={true}>
              { createdLinks.map((link) => (
                <ListItem className={classes.listItem}>
                <ListItemText
                    primary={link.url}
                  /><div/>
                   <a href={`${API_URL || "http://localhost:8099"}/${link.key}`}><ListItemText
                   className={classes.link}
                    primary={`${API_URL || "http://localhost:8099"}/${link.key}`}
                    /></a>
                </ListItem>
              ))}
            </List>
            </div>
    </div>
    );
});