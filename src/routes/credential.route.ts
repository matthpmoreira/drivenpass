import { CredentialController } from "#controllers";
import { authenticate, validateRequest } from "#middleware";
import { CredentialSchema } from "#schemas";
import { Router } from "express";

export const CredentialRoute = Router();
CredentialRoute.use(authenticate);
CredentialRoute.post("/credentials", validateRequest(CredentialSchema), CredentialController.postCredential);
CredentialRoute.get("/credentials", CredentialController.getAllCredentials);
CredentialRoute.get("/credentials/:id", CredentialController.getCredential);
CredentialRoute.put("/credentials/:id", validateRequest(CredentialSchema), CredentialController.putCredential);
CredentialRoute.delete("/credentials/:id", CredentialController.deleteCredential);
