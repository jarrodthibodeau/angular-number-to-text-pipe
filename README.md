# angular-number-to-text-pipe

A Angular 2+ pipe that takes numbers such as 123,456 and turns them into their text version (one hundred twenty three thousand four hundred fifty six).

I honestly could not tell you what a use-case for this could be but this was a quick and easy project to get a understanding of Angular and how it works.

## Installation

    npm install angular-number-to-text

## Usage 

#### In your module
    import { NumberToTextModule } from 'angular-number-to-text'

    @NgModule({
        imports: [
            NumberToTextPipe
        ]
    })

#### In your html templates
    {{ 54362 | numberToText }}

As of right now, this has only support for english and only allows for up to numbers in the trillions. If I have time in the future, I will try and get to adding these in (if needed).

If there are any issues, please feel free to submit an issue or even a PR.

