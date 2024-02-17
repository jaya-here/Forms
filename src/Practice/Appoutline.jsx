import Cascade from './component/Cascade'
import {NamewithToggle} from './component/NamewithToggle'

export default function Appoutline() {

  const data = [
    {
        name:'Megumi',
        paragraph:'Fushiguro'
    },
    {
        name:'Yuji',
        paragraph:'Itadori'
    },
    {
        name:'Nobara',
        paragraph:'Kugisaki'
    }
  ]



  return (
    <>
    <Cascade items={data}></Cascade>
    <NamewithToggle name="Jaya"></NamewithToggle>
    </>
  )
}

