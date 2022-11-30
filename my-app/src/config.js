export const stage = process.env.REACT_APP_MYENV;

export const appConfig = {
    dev: {
        sentryDsn: null,
    },
    gamma: {
        sentryDsn: "https://0649083cd7764b049472847bc3d65689@o4504246743138304.ingest.sentry.io/4504246744121344",
    },
    prod: {
        sentryDsn: "https://0649083cd7764b049472847bc3d65689@o4504246743138304.ingest.sentry.io/4504246744121344",
    }
}[stage];