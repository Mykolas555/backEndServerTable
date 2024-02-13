import { ModeToggle } from './components/mode-toggle';
import { Button } from './components/ui/button';
import Filter from './Filter';
import AddExpence from './AddExpence';

const Header = () => {
    
  return (
    <section className="flex justify-between items-center mb-8">
        <div>
            <h1 className="text-2xl font-bold">Expence Tracker App</h1>
        </div>
        <div className='flex mr-2'>
          <div>
            <Button><Filter/></Button>
          </div>
          <div className='ml-1'>
            <Button><AddExpence/></Button>
          </div>
          <div className='ml-1'>
            <ModeToggle/>
          </div>
        </div>
    </section>
       
  )
}

export default Header
