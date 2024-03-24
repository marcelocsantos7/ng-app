import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    // selector: '[app-server]', // as attribute
    // selector: '.app-server', // as class name
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'online';

    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}