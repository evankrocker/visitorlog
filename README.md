# Visitor Log

A simple, self-contained web-based visitor log application for tracking visitor check-ins and check-outs.

## Features

- **Check-In**: Record visitor information including name, company, and person they're visiting
- **Check-Out**: Select from a list of currently checked-in visitors to check them out
- **Automatic Timestamps**: Both check-in and check-out times are automatically recorded
- **Real-Time List**: View all currently checked-in visitors on the main interface
- **Persistent Storage**: Visitor data is stored in browser's local storage

## Usage

1. Open `index.html` in a web browser
2. Click "Check-In" to register a new visitor
3. Fill in the required information (Name, Company, Person to See)
4. The visitor will appear in the "Currently Checked-In Visitors" list
5. Click "Check-Out" to see all checked-in visitors and select one to check out
6. Once checked out, the visitor will be removed from the active list

## Technical Details

- **Technology**: Pure HTML, CSS, and JavaScript (no external dependencies)
- **Storage**: Browser localStorage
- **Compatibility**: Works in all modern web browsers

## Running the Application

Simply open the `index.html` file in any modern web browser. No server or build process required.
