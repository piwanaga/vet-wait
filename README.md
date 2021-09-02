# VetWait Waiting List App

This project is designed to be a waiting list for a veterinarian's office. Check people in, add them to a wait list, send them a text when ready and finally check them in. I made this after going to a vet appointment where they could not call or text people when they were ready and instead had people wait for hours within earshot of the office so they could hear their name get called.

## Live Page
[https://piwanaga.github.io/vet-wait/](https://piwanaga.github.io/vet-wait/)

## Installation

Clone the repo.

```
git clone https://github.com/piwanaga/vet-wait.git
```

Install packages.

```
npm install
```

Run in local server.

```
npm start
```

## Usage

1. Add person and pet to queue by submitting their names and phone number using the form (use your real phone number to get a text from VetWait!).
2. When a person is added to the queue, clicking 'Send Text' will send a message to the provided phone number to let them know they are ready to be checked in.
3. Clicking 'Check In' next to a person in the queue will mark them as checked in, completing the process.
4. Click 'Clear Checked In' below the queue to remove people from the queue who have been marked as checked in.

## Key Features
- Form validation
- Input mask on phone number field to keep input consistent
- Interactive UI
- Responsive Design
- Send SMS using [textbelt api](https://textbelt.com/)

