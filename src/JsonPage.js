import {Task} from 'x-task';
import JsonBody from './JsonBody';

export class MissingJsonBodyError extends Error {}

export default class JsonPage extends Task {
    do() {
        const bodyTask = this.children.filter(task => task.constructor === JsonBody)[0];

        if (!bodyTask) {
            throw new MissingJsonBodyError();
        }

        return bodyTask.start().then(data => this.params.response.json(data));
    }
}