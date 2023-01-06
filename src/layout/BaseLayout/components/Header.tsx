import cx from 'classnames'
interface IHeader {
  height?: number
  className?: string
}
export default function Header({ height = 56, className }: IHeader) {
  return (
    <>
      <header style={{ height: `${height}px` }} className={cx('fixed px-8 top-0 w-full bg-white text-zinc-800 shadow-md z-100', className)}>Header</header>
      <div style={{ height: `${height}px` }} />
    </>
  )
}
