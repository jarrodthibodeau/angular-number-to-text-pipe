import { NgModule } from '@angular/core';

import { NumberToTextPipe } from './number-to-text.pipe';

@NgModule({
    declarations: [
        NumberToTextPipe
    ],
    exports: [ NumberToTextPipe ]
})

export class NumberToTextModule {}