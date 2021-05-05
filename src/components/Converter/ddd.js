<div id="divContainer"></div>;

var colors = [{ Name: 'Red' }, { Name: 'Green' }, { Name: 'Blue' }];
var selectedColor = 'Green';

ReactDOM.render(
  <Container></Container>,
  document.getElementById('divContainer')
);



///
var DropDown = React.createClass({
  render: function () {
    var items = this.props.data;
    return (
      <select value={this.props.Selected}>
        {items.map(function (item) {
          return <option value={item.Name}>{item.Name}</option>;
        })}
      </select>
    );
  },
});

///
var DropDown = React.createClass({
  render: function () {
    var items = this.props.data;
    return (
      <select>
        {items.map(function (item) {
          return (
            <option value={item.Name} selected={selectedItem == item.Name}>
              {item.Name}
            </option>
          );
        })}
      </select>
    );
  },
});

///
var DropDown = React.createClass({
  render: function () {
    var items = this.props.data;
    return (
      <select>
        {items.map(function (item) {
          if (selectedItem == item.Name)
            return (
              <option value={item.Name} selected>
                {item.Name}
              </option>
            );
          else return <option value={item.Name}>{item.Name}</option>;
        })}
      </select>
    );
  },
});
