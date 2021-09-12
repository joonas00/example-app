import { action, makeObservable } from "mobx";
import { createLink } from "../api/linkApi";
import LinkCreationRequest from "../model/linkCreationRequest";
import LinkCreationResponse from "../model/linkCreationResponse";

export default class LinkStore {

    createLink = async (req: LinkCreationRequest): Promise<LinkCreationResponse> => {
      try {
        return await createLink(req);
      } catch (e: any) {
        console.error(e.stack);
        return Promise.reject("Failed to create a shortened link");
      }
    }

    constructor() {
      makeObservable(this, {
            createLink: action
      });
    }
}
