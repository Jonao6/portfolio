import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex flex-col justify-center'>
      <h2>Not Found</h2>
      <p>Essa página não existe</p>
      <Link href="/">Volte para Home</Link>
    </div>
  )
}