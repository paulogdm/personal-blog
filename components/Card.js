const Card = ({ children, header, className = '' }) => (
  <div className={`bg-yellow p-3 mb-4 rounded-lg card ${className}`}>
    <style jsx>{`
      .card :global(div:first-child > :first-child) {
        margin-top: 0;
      }
      .card :global(div:last-child > :last-child) {
        margin-bottom: 0;
      }
      img {
        width: 250px;
      }
    `}</style>
    {children}
  </div>
)

export default Card
