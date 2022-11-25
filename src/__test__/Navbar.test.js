import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Navbar from '../components/Navbar';

test('Render Navbar', () => {
  const renderNavbar = renderer.create(<BrowserRouter><Navbar /></BrowserRouter>).toJSON();
  expect(renderNavbar).toMatchSnapshot();
});
