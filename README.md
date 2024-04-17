Architecture: Front end
frontend/
├── public/ # Static assets
│ ├── index.html # Main HTML file
│ └── favicon.ico # Favicon
├── src/ # Source code
│ ├── components/ # Svelte components
│ │ ├── Auth/ # Authentication components
│ │ │ ├── Login.svelte # Login component
│ │ │ ├── Signup.svelte # Signup component
│ │ │ └── ForgotPassword.svelte # Forgot password component
│ │ ├── Dashboard/ # Dashboard components
│ │ │ ├── Navbar.svelte # Navigation bar
│ │ │ ├── Sidebar.svelte # Sidebar menu
│ │ │ └── Feed.svelte # Feed component
│ │ └── Common/ # Reusable components
│ │ ├── Button.svelte # Button component
│ │ ├── Input.svelte # Input component
│ │ └── Modal.svelte # Modal component
│ ├── routes/ # SvelteKit routes (if using SvelteKit)
│ ├── lib/ # Utility functions, helpers, etc.
│ ├── styles/ # Global stylesheets
│ │ └── main.css # Main stylesheet
│ ├── stores/ # Svelte stores (if using Svelte stores)
│ └── App.svelte # Main Svelte component
├── .gitignore # Git ignore file
├── package.json # NPM package file
├── README.md # Project README file
└── tsconfig.json # TypeScript configuration (if using TypeScript)
