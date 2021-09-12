import LinkCreationRequest from "../model/linkCreationRequest";
import LinkCreationResponse from "../model/linkCreationResponse";

export const API_URL = process.env.REACT_APP_API_URL || ""

export const createLink = async(req: LinkCreationRequest): Promise<LinkCreationResponse> => {
    const resp = await fetch(`${API_URL}/shorten`, {
        method: "POST",
        body: JSON.stringify(req),
        headers: {
          "Content-Type": "application/json",
        },

    });
    return await resp.json() as LinkCreationResponse;
}

