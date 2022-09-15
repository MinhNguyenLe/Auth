import Router from 'src/routes';
import ThemeProvider from 'src/theme';
import ScrollToTop from 'src/components/ScrollToTop';
import { BaseOptionChartStyle } from 'src/components/chart/BaseOptionChart';


export default function App() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <BaseOptionChartStyle />
      <Router />
     </ThemeProvider> 
  );
}
