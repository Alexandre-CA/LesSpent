# LesSpent

## Description
LesSpent is a web and mobile application focused on personal finance tracking. The main objective of this project is to provide a simple and efficient platform for users to log their daily expenses. This is a personal project aimed at improving financial awareness and budgeting.

## Features
- 📝 Daily expense tracking
- 📱 Mobile and web accessibility
- 🔒 Secure data storage with AWS
- 🎨 User-friendly interface designed with Figma

## Tech Stack
- **Frontend**: Next.js
- **Backend & Infrastructure**: AWS with SST (Serverless Stack)
- **Design & Prototyping**: Figma

## Installation

### Prerequisites
- Node.js
- AWS CLI configured
- SST (Serverless Stack) installed

### Steps
1. Clone the repository:
   ```sh
   npm install
   ```
2. Install dependencies:
   ```sh
   npm run dev
   ```
3. Start the development server:
   ```sh
   git clone https://github.com/yourusername/les-spent.git
   cd les-spent
   ```

## Deployment

 1. Deploy to AWS using SST:
 ```sh
 npx sst deploy
 ```

## Folder Structure

```bash
src
├── app     # Next App Routes
│        ├── example-page     
│        │       ├── page.tsx     # Rendering page
│        │       ├── component.tsx     # Principal page component
│        │       ├── layout.tsx     # Page layout
│        │       └── type.d.ts     # Principal page component type
│        └── api    # Project APIs   
│                 └── example-component 
│                          ├── index.tsx     # Component code
│                          ├── index.test.tsx     # Component test
│                          └── type.d.ts     # Component  type
│
├── components     # Global components with can use in every project
│       └── example-component 
│                ├── index.tsx     # Component code
│                ├── index.test.tsx     # Component test
│                └── type.d.ts     # Component  type
│
├── hooks        # Global hooks
├── contexts     # Global context
│
├── functions     # Global server functions
│       └── example-function
│                ├── index.tsx     # function code
│                ├── index.test.tsx     # function test
│                └── type.d.ts     # function type
│
└── utils        # Generic Functions
```

## Host

LesSpent is available at: [https://lesspent.com.br/](lesspent.com.br)

## Contributing

Since this is a personal project, contributions are currently not open. However, feedback and suggestions are welcome!
