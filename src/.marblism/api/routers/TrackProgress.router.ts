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

        createMany: procedure.input($Schema.TrackProgressInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).trackProgress.createMany(input as any))),

        create: procedure.input($Schema.TrackProgressInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).trackProgress.create(input as any))),

        deleteMany: procedure.input($Schema.TrackProgressInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).trackProgress.deleteMany(input as any))),

        delete: procedure.input($Schema.TrackProgressInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).trackProgress.delete(input as any))),

        findFirst: procedure.input($Schema.TrackProgressInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).trackProgress.findFirst(input as any))),

        findMany: procedure.input($Schema.TrackProgressInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).trackProgress.findMany(input as any))),

        findUnique: procedure.input($Schema.TrackProgressInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).trackProgress.findUnique(input as any))),

        updateMany: procedure.input($Schema.TrackProgressInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).trackProgress.updateMany(input as any))),

        update: procedure.input($Schema.TrackProgressInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).trackProgress.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.TrackProgressCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TrackProgressCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TrackProgressCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TrackProgressCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.TrackProgressCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TrackProgressCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TrackProgressGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TrackProgressGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TrackProgressCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TrackProgressCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TrackProgressGetPayload<T>, Context>) => Promise<Prisma.TrackProgressGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.TrackProgressDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TrackProgressDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TrackProgressDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TrackProgressDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.TrackProgressDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TrackProgressDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TrackProgressGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TrackProgressGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TrackProgressDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TrackProgressDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TrackProgressGetPayload<T>, Context>) => Promise<Prisma.TrackProgressGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.TrackProgressFindFirstArgs, TData = Prisma.TrackProgressGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.TrackProgressFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.TrackProgressGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TrackProgressFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TrackProgressFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.TrackProgressGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.TrackProgressGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.TrackProgressFindManyArgs, TData = Array<Prisma.TrackProgressGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.TrackProgressFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.TrackProgressGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TrackProgressFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TrackProgressFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.TrackProgressGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.TrackProgressGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.TrackProgressFindUniqueArgs, TData = Prisma.TrackProgressGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.TrackProgressFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.TrackProgressGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TrackProgressFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TrackProgressFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.TrackProgressGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.TrackProgressGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.TrackProgressUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TrackProgressUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TrackProgressUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TrackProgressUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.TrackProgressUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TrackProgressUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TrackProgressGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TrackProgressGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TrackProgressUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TrackProgressUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TrackProgressGetPayload<T>, Context>) => Promise<Prisma.TrackProgressGetPayload<T>>
            };

    };
}
