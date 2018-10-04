// @flow

import express from 'express';
import XPressive, { JsonPage, JsonBody } from'../src' ;
import XTask, {Task} from 'x-task';

class HelloWorld extends Task {
    do() {
        return Promise.resolve({
            hello: 'world',
        })
    }
}

class HelloWorldPage extends Task {
    do() {
        return (
            <JsonPage
                request={this.params.request}
                response={this.params.response}
            >
                <JsonBody>
                    <HelloWorld />
                </JsonBody>
            </JsonPage>
        );
    }
}

const app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => XPressive.createPage(HelloWorldPage, {
    request: req,
    response: res,
}));

const server = app.listen(app.get('port'), () => {
    console.log('Express server listening on port ' + server.address().port);
});
