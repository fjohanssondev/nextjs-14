import { BuildingOfficeIcon } from "@heroicons/react/24/outline";

export default function Banner() {
  return (
    <header className='flex items-end w-full h-36 bg-black rounded p-4'>
      <div className='flex items-center'>
        <BuildingOfficeIcon width={36} height={36} color='white' />
        <span className='text-white text-3xl font-bold ml-2'>Acme Corp</span>
      </div>
    </header>
  )
}