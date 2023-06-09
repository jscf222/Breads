const React = require('react')
const Default = require('./layouts/default')

function Index ({breads, bakers, title}) {
    return (
      <Default>
        <h2>Index Page</h2>
        <div className="newButton">
  <a href="/breads/new"><button>Add a new bread</button></a>
</div>

        {/* { <p> i have {breads[0].name} bread!</p> } */}
        <ul>
                {
                    breads.map((bread, id) => {
                        return (
                            <li key={id}>
                                <a href={`/breads/${bread.id}`}>
                                {bread.name}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
      </Default>
    )
}

module.exports = Index
