export const config = { amp: true }
 
function MyAmpPage() {
  const date = new Date()
 
  return (
    <div>
      <p>Some time: {date.toJSON()}</p>
      <amp-timeago
        width="0"
        height="15"
        datetime={date.toJSON()}
        layout="responsive"
      >
        .
      </amp-timeago>
    </div>
  )
}
 
export default MyAmpPage