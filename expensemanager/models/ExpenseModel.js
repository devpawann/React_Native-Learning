class ExpenseModel {
  constructor(id, title, amount, date) {
    this.id = id;
    this.title = title;
    this.amount = amount;
    this.date = date;
  }
  toJson() {
    return {
      title: this.title,
      amount: this.amount,
      date: this.date,
    };
  }
}
export default ExpenseModel;
