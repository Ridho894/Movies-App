interface HeaderItemProps {
  title: string
  Icon: any
}
function HeaderItem(props: HeaderItemProps) {
  return (
    <div
      className={
        'group flex w-12 cursor-pointer flex-col items-center hover:text-white sm:w-20'
      }
    >
      <props.Icon className={'mb-1 h-8 group-hover:animate-bounce'} />
      <p className={'tracking-widest opacity-0 group-hover:opacity-100'}>
        {props.title}
      </p>
    </div>
  )
}

export default HeaderItem
