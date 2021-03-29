import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'platform-shell',
  template: `
    <platform-navigation>
      <main>
        <h1>Shell works</h1>
      </main>
    </platform-navigation>
  `,
  styles: [
    `
      main {
        height: calc(100vh - 64px);
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellComponent {}
