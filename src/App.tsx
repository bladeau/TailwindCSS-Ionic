import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required htmlFor Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS htmlFor apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out 
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
*/

/* Theme variables */
import './theme/variables.css';

/* Tailwind */
import './theme/tailwind.css';
import Nav from './components/Nav';

const App: React.FC = () => (
  <IonApp>
    <div
      className='min-h-screen bg-gray-100'
      data-pg-name='Stacked Layouts - Brand nav with overlap'
    >
      <div className='bg-indigo-800 pb-32'>
        <Nav />
        <header className='py-10'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h1 className='text-3xl leading-9 font-bold text-white'>
              Dashboard
            </h1>
          </div>
        </header>
      </div>
      <main className='-mt-32'>
        <div className='max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8'>
          <div className='bg-white rounded-lg shadow px-5 py-6 sm:px-6 text-black'>
            [react-scripts] Search for the keywords to learn more about each
            warning. [react-scripts] To ignore, add // eslint-disable-next-line
            to the line before. [react-scripts] Compiling... [react-scripts]
            [react-scripts] ./src/App.tsx
          </div>
        </div>
      </main>
    </div>
  </IonApp>
);

export default App;
