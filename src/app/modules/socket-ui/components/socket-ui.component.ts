import { SocketUIService } from './../services/socket-ui.service'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'socket-ui',
  template: `
    <input-bar (result)="handleChange($event)"></input-bar>
    <div class="row">
      <div class="col s6">
        Payload
      </div>
      <div class="col s6">
        Result
      </div>
    </div>
    <div class="row">
      <div class="col s6">
      <ngs-code-editor
        [theme]="theme"
        [codeModel]="payloadModel"
        [options]="options"
        style="height: 500px;"
        (valueChanged)="onCodeChanged($event)"
      >
      </ngs-code-editor>
      </div>
      <div class="col s6 grey darken-4" style="height: 500px; overflow-y: scroll;">
          <pre class="white-text" style="font-size: 10px;">{{ result | json }}</pre>
      </div>
    </div>
  `,
  styleUrls: ['./socket-ui.component.scss']
})
export class SocketUIComponent implements OnInit {

  result: any = undefined

  theme = 'vs-dark'

  payloadModel = {
    language: 'json',
    value: '{}'
  }

  resultModel = {
    language: 'json',
    value: this.result
  }

  options = {
    contextmenu: false,
    fontSize: 10,
    minimap: {
      enabled: true
    }
  }

  constructor(private socketUIService: SocketUIService) {}

  async ngOnInit(): Promise<void> {
  }

  onCodeChanged(value) {
    console.log('CODE', value)
  }

  handleChange(event) {
    this.result = event
  }

}
