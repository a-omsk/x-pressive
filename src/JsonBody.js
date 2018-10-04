import {Task} from 'x-task';

export default class JsonBody extends Task {
    do() {
        return this.children[0].start();
    }
}