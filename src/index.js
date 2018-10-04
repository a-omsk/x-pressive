import XTask, { Task } from 'x-task';

import JsonPage from './JsonPage';
import JsonBody from './JsonBody';

type PageParams = {
    request: Object,
    response: Object,
}

class IncompatibleTaskError extends Error {}

export default class XPressive {
    static createPage(Constructor:Class<Task>, pageParams:PageParams) {
        if (Constructor.prototype instanceof Task === false) {
            throw new IncompatibleTaskError(`${Constructor.name} is not Task subclass`);
        }

        const pageTask = XTask.createTask(Constructor, pageParams);

        return pageTask.start();
    }
}

export {
    JsonPage,
    JsonBody,
}
