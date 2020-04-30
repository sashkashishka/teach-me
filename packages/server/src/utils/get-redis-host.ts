const getRedisHost = (): string | undefined => (process.env.NODE_ENV === 'development'
  ? process.env.REDIS_NETWORK_DEV
  : process.env.REDIS_NETWORK
);

export default getRedisHost;
