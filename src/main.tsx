import { createRoot } from 'react-dom/client'
import './index.css'
import {TodoMain} from './TodoMain.tsx'

createRoot(document.getElementById('root')!).render(
    <TodoMain />
)
