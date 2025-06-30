import './index.css'
import { Button } from './Components/ui/Button'
import { ShareIcon } from './icons/shareIcon'

function App() {

  return (
    <>
      <Button variant="primary" size="md" onClick={()=> {}} text="Click Me!" startIcon={<ShareIcon size="md"/>}/>
        <Button variant="secondary" size="md" onClick={()=> {}} text="Click Me!" />
    </>
  )
}

export default App
