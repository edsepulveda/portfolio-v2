import AnchorLink from 'react-anchor-link-smooth-scroll'

export const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase()

  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? 'text-[#e63946]' : 'text-white'
      } 
      hover:text-[#e63946] font-semibold transition duration-300 m-4 text-[1.1rem]`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  )
}
