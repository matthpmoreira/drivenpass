import { CredentialForm, PublicUser } from "#protocols";
import { CredentialService } from "#services";
import { Request, Response } from "express";
import httpStatus from "http-status";

async function postCredential(req: Request, res: Response) {
    const form = req.body as CredentialForm;
    const user = res.locals.user as PublicUser;
    await CredentialService.createCredential(user.id, form);
    res.sendStatus(httpStatus.CREATED);
}

async function getAllCredentials(_: Request, res: Response) {
    const user = res.locals.user as PublicUser;
    const credentials = await CredentialService.getAllCredentials(user.id);
    res.send(credentials);
}

async function getCredential(req: Request, res: Response) {
    const id = Number(req.params.id);
    const user = res.locals.user as PublicUser;
    const credential = await CredentialService.getCredential(user.id, id);
    res.send(credential);
}

export const CredentialController = {
    postCredential,
    getAllCredentials,
    getCredential,
};
