function Stack() {
	/*各种属性和方法的声明*/
	let items = [];
	//向栈添加元素
	this.push = function(element) {
		/*push()用于把元素添加到数组末位*/
		items.push(element);
	}

	//从栈中移除元素
	/*
		 *删除数组末位元素
		 *由于栈是先进后出所以删除最后一个元素
		 */
	this.pop = function() {

		return items.pop();
	}
	//查看栈顶元素
	this.peek = function() {
		return items[items.length - 1];
	}
	//检查栈是否为空
	this.isempty = function() {
		return items.length == 0;
	}

	//返回栈的长度
	this.size = function() {
		return items.length;
	}

	//清空栈
	this.clear = function() {
		items = [];
	}
	//打印栈
	this.print = function() {
		console.log(items.toString());
	}
}

//初始化栈
let stack = new Stack();
console.log(stack.isempty()); //true
//先进后出
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log(stack.pop())
//console.log(items)
console.log(stack.print())