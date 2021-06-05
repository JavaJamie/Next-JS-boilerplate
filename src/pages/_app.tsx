import { AppProps } from 'next/app';
import { FC } from 'react';

/**
 * The @App component is the entry point into the application. It wraps the application with
 * the @see ChakraProvider which is a TailwindCSS inspired utility-first React component library.
 *
 * @param param0
 * @returns
 * @author jlee
 */
const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => (
    <Component {...pageProps} />
);

export default App;
