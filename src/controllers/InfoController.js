import logger from '../shared/logger';


export const getProcessInfo = (req, res) => {
    const { argv, execPath, platform, pid, version } = process;
    const rss = process.memoryUsage().rss;
    const folder = process.cwd();
    const args = argv.slice(2);
    const data = {
        args,
        execPath,
        platform,
        pid,
        version,
        rss,
        folder,
        cpus: require('os').cpus().length
    };

    res.render('info', { data });
    logger.info(`${req.method} ${req.originalUrl} - ${new Date().toLocaleString()}`);
};