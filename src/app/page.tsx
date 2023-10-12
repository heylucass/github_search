import Image from 'next/image';
import { Box } from './Box';

export default function Home() {
  return (
    <main className='h-full'>

      <div className='text-base flex justify-between flex-row items-center h-3/6 bg-dark_purple'>

        <div className='p-2'>
          <span className='text-3xl font-mono text-white'>
            <h3 className='first-line:text-pantone'>Access your account!</h3>
          </span><br />
           <input className='block w-max bg-slate-900 rounded-md border-0 py-1.5 pl-7 pr-20 ring-2 text-gray-900 ring-inset placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' type="text" placeholder="Username Github"/>
        </div>
        <div className='flex flex-col p-4'>
          <span className='text-xl font-mono text-white'><h4 className='first-line:text-pantone'>Best Projects</h4></span><br />
          <div className='flex flex-row min-h-max flex-wrap gap-1 justify-between align-center'>
            <Box name={"APIrest"} description={"good api restgood api restgood api restgood api restgood api restgood api restgood api restgood api rests"} like={12}/>
            <Box name={"Game"} description={"snakegame"} like={30}/>
            <Box name={"UI"} description={"sample UI"} like={80}/>
          </div>
        </div>

      </div>

      <div className='mb-32 bg-black h-3/6 text-center justify-center align-center flex flex-col '>
      <span className='text-2xl font-mono text-white'>
        <h3 className='first-line:text-quinacridone_magenta'>Your Stats</h3>
      </span><br />

        <div className="bg-black grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left justify-center align-center font-xl text-slate-600 ml-3">
          <ul>
            <li className='hover:text-slate-700'>Projects: 20</li>
            <li className='hover:text-slate-700'>Recents commits: 50</li>
            <li className='hover:text-slate-700'>Forks: 10</li>
            <li className='hover:text-slate-700'>Stars: 23</li>
            <li className='hover:text-slate-700'>Friends: 21</li>
            <li className='hover:text-slate-700'>Tecnologies: 23</li>
          </ul>
        </div>

      </div>
    </main>
  )
}
