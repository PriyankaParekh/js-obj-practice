class Table {
    constructor(id) {
      this.id = id;
      console.log(this.id);
    }
  
    createTable(row, col) {
      this.col = col;
      let container = document.getElementById(this.id);
      console.log(container, "here");
      let table = document.createElement("table");
      for (let i = 0; i < row; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < col; j++) {
          let td = document.createElement("td");
          td.appendChild(document.createTextNode(`Row ${i + 1}, Col ${j + 1}`));
          tr.appendChild(td);
        }
        table.appendChild(tr);
      }
      container.appendChild(table);
    }
  
    addRow(size = this.col) {
      let container = document.getElementById(this.id);
      let table = container.getElementsByTagName("table")[0];
      console.log("here", table);
      let tr = document.createElement("tr");
      for (let j = 0; j < size; j++) {
        let td = document.createElement("td");
        td.appendChild(document.createTextNode(`New Row, Col ${j + 1}`));
        tr.appendChild(td);
      }
      table.appendChild(tr);
    }
  
    deleteRow(index) {
      let container = document.getElementById(this.id);
      let table = container.getElementsByTagName("table")[0];
      if (table && index > 0 && index <= table.rows.length) {
        table.deleteRow(index - 1);
      }
    }
  }
  
  let a = new Table("table1");
  a.createTable(7, 5);
  a.addRow();
  a.addRow();
  a.deleteRow(5);
  
  let b = new Table("table2");
  b.createTable(4, 5);
  b.addRow();
  b.deleteRow(2);
  