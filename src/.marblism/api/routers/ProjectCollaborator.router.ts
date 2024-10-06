/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.ProjectCollaboratorInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).projectCollaborator.createMany(input as any))),

        create: procedure.input($Schema.ProjectCollaboratorInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).projectCollaborator.create(input as any))),

        deleteMany: procedure.input($Schema.ProjectCollaboratorInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).projectCollaborator.deleteMany(input as any))),

        delete: procedure.input($Schema.ProjectCollaboratorInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).projectCollaborator.delete(input as any))),

        findFirst: procedure.input($Schema.ProjectCollaboratorInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).projectCollaborator.findFirst(input as any))),

        findMany: procedure.input($Schema.ProjectCollaboratorInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).projectCollaborator.findMany(input as any))),

        findUnique: procedure.input($Schema.ProjectCollaboratorInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).projectCollaborator.findUnique(input as any))),

        updateMany: procedure.input($Schema.ProjectCollaboratorInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).projectCollaborator.updateMany(input as any))),

        update: procedure.input($Schema.ProjectCollaboratorInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).projectCollaborator.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.ProjectCollaboratorCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ProjectCollaboratorCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ProjectCollaboratorCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ProjectCollaboratorCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.ProjectCollaboratorCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ProjectCollaboratorCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ProjectCollaboratorGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ProjectCollaboratorGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ProjectCollaboratorCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ProjectCollaboratorCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ProjectCollaboratorGetPayload<T>, Context>) => Promise<Prisma.ProjectCollaboratorGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.ProjectCollaboratorDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ProjectCollaboratorDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ProjectCollaboratorDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ProjectCollaboratorDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.ProjectCollaboratorDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ProjectCollaboratorDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ProjectCollaboratorGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ProjectCollaboratorGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ProjectCollaboratorDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ProjectCollaboratorDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ProjectCollaboratorGetPayload<T>, Context>) => Promise<Prisma.ProjectCollaboratorGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.ProjectCollaboratorFindFirstArgs, TData = Prisma.ProjectCollaboratorGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ProjectCollaboratorFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ProjectCollaboratorGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ProjectCollaboratorFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ProjectCollaboratorFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ProjectCollaboratorGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ProjectCollaboratorGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.ProjectCollaboratorFindManyArgs, TData = Array<Prisma.ProjectCollaboratorGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.ProjectCollaboratorFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.ProjectCollaboratorGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ProjectCollaboratorFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ProjectCollaboratorFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.ProjectCollaboratorGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.ProjectCollaboratorGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.ProjectCollaboratorFindUniqueArgs, TData = Prisma.ProjectCollaboratorGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ProjectCollaboratorFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ProjectCollaboratorGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ProjectCollaboratorFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ProjectCollaboratorFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ProjectCollaboratorGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ProjectCollaboratorGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.ProjectCollaboratorUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ProjectCollaboratorUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ProjectCollaboratorUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ProjectCollaboratorUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.ProjectCollaboratorUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ProjectCollaboratorUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ProjectCollaboratorGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ProjectCollaboratorGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ProjectCollaboratorUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ProjectCollaboratorUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ProjectCollaboratorGetPayload<T>, Context>) => Promise<Prisma.ProjectCollaboratorGetPayload<T>>
            };

    };
}
