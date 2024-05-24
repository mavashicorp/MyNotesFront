import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'
// import * as React from 'react'
// import React from 'react'




ReactDOM.createRoot(document.getElementById("root")).render(
	<ChakraProvider>
		<App />
	</ChakraProvider>
);
