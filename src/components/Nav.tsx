import { IonPopover } from '@ionic/react';
import React, { useState } from 'react';
// import { Transition } from '@headlessui/react';

const Nav = () => {
  const [MenuVisibility, setMenuVisibility] = useState(false);
  const [
    ProfileOptionsDropdownVisibiity,
    setProfileOptionsDropdownVisibiity,
  ] = useState<{ open: boolean; event: Event | undefined }>({
    open: false,
    event: undefined,
  });

  const [width, setWidth] = React.useState(window.innerWidth);

  const breakpoint = 1024;

  React.useEffect(() => {
    /* Inside of a "useEffect" hook add an event listener that updates
       the "width" state variable when the window size changes */

    const handleWindowResize = () => {
      setProfileOptionsDropdownVisibiity({
        open: false,
        event: undefined,
      });

      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    /* passing an empty array as the dependencies of the effect will cause this
       effect to only run when the component mounts, and not each time it updates.
       We only want the listener to be added once */
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <nav className='bg-indigo-800 border-indigo-400 border-opacity-25 lg:border-none'>
      <div className='max-w-7xl mx-auto px-2 sm:px-4 lg:px-8'>
        <div className='relative h-16 flex items-center justify-between l lg:border-indigo-400 lg:border-opacity-25'>
          <div className='px-2 flex items-center lg:px-0'>
            <div className='flex-shrink-0'>
              <img
                className='block h-8 w-auto'
                src='https://tailwindui.com/img/logos/v1/workflow-mark-indigo-300.svg'
                alt='Workflow'
              />
            </div>
            <div className='hidden lg:block lg:ml-6'>
              <div className='flex'>
                <a
                  href='/'
                  className='rounded-md bg-indigo-900 py-2 px-3 text-sm leading-5 font-medium text-white hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700 transition duration-150 ease-in-out'
                >
                  Dashboard
                </a>
                <a
                  href='/'
                  className='ml-4 rounded-md py-2 px-3 text-sm leading-5 font-medium text-white hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700 transition duration-150 ease-in-out'
                >
                  Team
                </a>
                <a
                  href='/'
                  className='ml-4 rounded-md py-2 px-3 text-sm leading-5 font-medium text-white hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700 transition duration-150 ease-in-out'
                >
                  Projects
                </a>
                <a
                  href='/'
                  className='ml-4 rounded-md py-2 px-3 text-sm leading-5 font-medium text-white hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700 transition duration-150 ease-in-out'
                >
                  Calendar
                </a>
              </div>
            </div>
          </div>
          <div className='flex-1 px-2 flex justify-center lg:ml-6 lg:justify-end'>
            <div className='max-w-lg w-full lg:max-w-xs'>
              <label htmlFor='search' className='sr-only'>
                Search
              </label>
              <div className='relative'>
                <div
                  className='pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center'
                  aria-hidden='true'
                >
                  <svg
                    className='h-5 w-5 text-gray-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                      clip-rule='evenodd'
                    />
                  </svg>
                </div>
                <input
                  id='search'
                  className='block w-full bg-white py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 placeholder-gray-500 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo sm:text-sm transition duration-150 ease-in-out'
                  placeholder='Search'
                  type='search'
                />
              </div>
            </div>
          </div>
          <div className='flex lg:hidden'>
            {/* Mobile menu button */}
            <button
              className='p-2 rounded-md inline-flex items-center justify-center text-indigo-300 hover:text-white hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700 focus:text-white transition duration-150 ease-in-out'
              aria-expanded='false'
              onClick={() =>
                setMenuVisibility(
                  (lastMenuVisbilityState) => !lastMenuVisbilityState
                )
              }
            >
              <span className='sr-only'>Open main menu</span>
              {/* Icon when menu is closed. */}
              {/*
          Heroicon name: menu

          Menu open: "hidden", Menu closed: "block"
        */}
              <svg
                className={
                  MenuVisibility && width < breakpoint
                    ? 'hidden flex-shrink-0 h-6 w-6'
                    : 'block flex-shrink-0 h-6 w-6'
                }
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
              {/* Icon when menu is open. */}
              {/*
          Heroicon name: x

          Menu open: "block", Menu closed: "hidden"
        */}
              <svg
                className={
                  MenuVisibility && width < breakpoint
                    ? 'block flex-shrink-0 h-6 w-6'
                    : 'hidden flex-shrink-0 h-6 w-6'
                }
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
          <div className='hidden lg:block lg:ml-4'>
            <div className='flex items-center'>
              <button className='flex-shrink-0 border-2 border-transparent rounded-full p-1 text-indigo-300 hover:text-white focus:outline-none focus:text-white focus:bg-indigo-700 transition duration-150 ease-in-out'>
                <span className='sr-only'>View notifications</span>
                {/* Heroicon name: bell */}
                <svg
                  className='h-6 w-6'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
                  />
                </svg>
              </button>
              {/* Profile dropdown */}
              <div className='relative flex-shrink-0 ml-4'>
                <div>
                  <button
                    className='rounded-full flex text-sm text-white focus:outline-none focus:shadow-solid transition duration-150 ease-in-out'
                    id='user-menu'
                    aria-haspopup='true'
                    onClick={(e) =>
                      setProfileOptionsDropdownVisibiity({
                        open: true,
                        event: e.nativeEvent,
                      })
                    }
                    // onBlur={() =>
                    //   setTimeout(
                    //     () => setProfileOptionsDropdownVisibiity(false),
                    //     50
                    //   )
                    // }
                  >
                    <span className='sr-only'>Open profile menu</span>

                    <img
                      className='rounded-full h-8 w-8'
                      src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                      alt=''
                    />
                  </button>
                </div>
                <IonPopover
                  cssClass='popover-top-right'
                  isOpen={ProfileOptionsDropdownVisibiity.open}
                  event={ProfileOptionsDropdownVisibiity.event}
                  onDidDismiss={() =>
                    setProfileOptionsDropdownVisibiity({
                      open: false,
                      event: undefined,
                    })
                  }
                >
                  <div className='origin-top-right  right-0 mt-2 w-56 rounded-md shadow-lg'>
                    <div
                      className='rounded-md bg-white shadow-xs'
                      role='menu'
                      aria-orientation='vertical'
                      aria-labelledby='options-menu'
                    >
                      <div className='px-4 py-3'>
                        <p className='text-sm leading-5'>Signed in as</p>
                        <p className='text-sm leading-5 font-medium text-gray-900 truncate'>
                          tom@example.com
                        </p>
                      </div>
                      <div className='border-t border-gray-100'></div>
                      <div className='py-1'>
                        <a
                          href='#'
                          className='block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900'
                          role='menuitem'
                        >
                          Account settings
                        </a>
                        <a
                          href='#'
                          className='block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900'
                          role='menuitem'
                        >
                          Support
                        </a>
                        <a
                          href='#'
                          className='block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900'
                          role='menuitem'
                        >
                          License
                        </a>
                      </div>
                      <div className='border-t border-gray-100'></div>
                      <div className='py-1'>
                        <form method='POST' action='#'>
                          <button
                            type='submit'
                            className='block w-full text-left px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900'
                            role='menuitem'
                          >
                            Sign out
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </IonPopover>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*
  Mobile menu, toggle classes based on menu state.

  Menu open: "block", Menu closed: "hidden"
*/}
      <div
        className={
          MenuVisibility && width < breakpoint
            ? 'block lg:block'
            : 'hidden lg:hidden'
        }
      >
        <div className='px-2 pt-2 pb-3'>
          <a
            href='/'
            className='block bg-indigo-900 rounded-md py-2 px-3 text-base font-medium text-white focus:outline-none focus:text-white focus:bg-indigo-700 transition duration-150 ease-in-out'
          >
            Dashboard
          </a>
          <a
            href='/'
            className='block mt-1 rounded-md py-2 px-3 text-base font-medium text-white hover:text-white hover:bg-indigo-700 focus:outline-none focus:text-white focus:bg-indigo-700 transition duration-150 ease-in-out'
          >
            Team
          </a>
          <a
            href='/'
            className='block mt-1 rounded-md py-2 px-3 text-base font-medium text-white hover:text-white hover:bg-indigo-700 focus:outline-none focus:text-white focus:bg-indigo-700 transition duration-150 ease-in-out'
          >
            Projects
          </a>
          <a
            href='/'
            className='block mt-1 rounded-md py-2 px-3 text-base font-medium text-white hover:text-white hover:bg-indigo-700 focus:outline-none focus:text-white focus:bg-indigo-700 transition duration-150 ease-in-out'
          >
            Calendar
          </a>
        </div>
        <div className='pt-4 pb-3 border-t border-indigo-400 border-opacity-25'>
          <div className='px-5 flex items-center'>
            <div className='flex-shrink-0'>
              <img
                className='rounded-full h-10 w-10'
                src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                alt=''
              />
            </div>
            <div className='ml-3'>
              <div className='text-base font-medium leading-6 text-white'>
                Tom Cook
              </div>
              <div className='text-sm font-medium leading-5 text-indigo-300'>
                tom@example.com
              </div>
            </div>
          </div>
          <div className='mt-3 px-2'>
            <a
              href='/'
              className='block rounded-md py-2 px-3 text-base font-medium text-indigo-300 hover:text-white hover:bg-indigo-700 focus:outline-none focus:text-white focus:bg-indigo-700 transition duration-150 ease-in-out'
            >
              Your Profile
            </a>
            <a
              href='/'
              className='block mt-1 rounded-md py-2 px-3 text-base font-medium text-indigo-300 hover:text-white hover:bg-indigo-700 focus:outline-none focus:text-white focus:bg-indigo-700 transition duration-150 ease-in-out'
            >
              Settings
            </a>
            <a
              href='/'
              className='block mt-1 rounded-md py-2 px-3 text-base font-medium text-indigo-300 hover:text-white hover:bg-indigo-700 focus:outline-none focus:text-white focus:bg-indigo-700 transition duration-150 ease-in-out'
            >
              Sign out
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
