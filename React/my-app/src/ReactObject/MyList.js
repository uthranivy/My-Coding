import "../App.css";

function MyList() {
  const dataCollection = [
    {
      id: 1,
      title: "ReactJs",
      label: "Maanavan Code",
    },
  ];

  // let ListTemplate;

  // if (dataCollection.length) {
  //   ListTemplate = dataCollection.map((item, index) => (
  //     <li key={index}>
  //       {item.title} - {item.label}
  //     </li>
  //   ));
  // } else {
  //   ListTemplate = <li>No Messages Found</li>;
  // }

  return (
    <div classNameName="App">
      <header classNameName="App-header">
        <div>
          <ul>
            {dataCollection.length ? (
              dataCollection.map((item, index) => (
                <li key={index}>
                  {item.title}- {item.label}
                </li>
              ))
            ) : (
              <li>No Messages Found</li>
            )}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default MyList;
