/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "@prisma/client";
import createProjectRouter from "./Project.router";
import createTrackRouter from "./Track.router";
import createTaskRouter from "./Task.router";
import createProjectCollaboratorRouter from "./ProjectCollaborator.router";
import createTrackProgressRouter from "./TrackProgress.router";
import createApiKeyRouter from "./ApiKey.router";
import createUserPreferenceRouter from "./UserPreference.router";
import createInvitationRouter from "./Invitation.router";
import createNotificationSettingRouter from "./NotificationSetting.router";
import createUserRouter from "./User.router";
import createAccountRouter from "./Account.router";
import createSessionRouter from "./Session.router";
import { ClientType as ProjectClientType } from "./Project.router";
import { ClientType as TrackClientType } from "./Track.router";
import { ClientType as TaskClientType } from "./Task.router";
import { ClientType as ProjectCollaboratorClientType } from "./ProjectCollaborator.router";
import { ClientType as TrackProgressClientType } from "./TrackProgress.router";
import { ClientType as ApiKeyClientType } from "./ApiKey.router";
import { ClientType as UserPreferenceClientType } from "./UserPreference.router";
import { ClientType as InvitationClientType } from "./Invitation.router";
import { ClientType as NotificationSettingClientType } from "./NotificationSetting.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as AccountClientType } from "./Account.router";
import { ClientType as SessionClientType } from "./Session.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        project: createProjectRouter(router, procedure),
        track: createTrackRouter(router, procedure),
        task: createTaskRouter(router, procedure),
        projectCollaborator: createProjectCollaboratorRouter(router, procedure),
        trackProgress: createTrackProgressRouter(router, procedure),
        apiKey: createApiKeyRouter(router, procedure),
        userPreference: createUserPreferenceRouter(router, procedure),
        invitation: createInvitationRouter(router, procedure),
        notificationSetting: createNotificationSettingRouter(router, procedure),
        user: createUserRouter(router, procedure),
        account: createAccountRouter(router, procedure),
        session: createSessionRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    project: ProjectClientType<AppRouter>;
    track: TrackClientType<AppRouter>;
    task: TaskClientType<AppRouter>;
    projectCollaborator: ProjectCollaboratorClientType<AppRouter>;
    trackProgress: TrackProgressClientType<AppRouter>;
    apiKey: ApiKeyClientType<AppRouter>;
    userPreference: UserPreferenceClientType<AppRouter>;
    invitation: InvitationClientType<AppRouter>;
    notificationSetting: NotificationSettingClientType<AppRouter>;
    user: UserClientType<AppRouter>;
    account: AccountClientType<AppRouter>;
    session: SessionClientType<AppRouter>;
}
