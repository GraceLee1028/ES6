/**
 * Created by Administrator on 2016/8/5.
 */
//const����һ��ֻ���ĳ�����һ��������������ֵ�Ͳ��ܸı�
const PI = 3.1415;
//PI = 3;
//const NUM;  //����,��������Ҫ����������ֵ��
//var PI = 3;  //�����ظ�����
if(true){
    const MAX = 5;
}
//����
//����Ⱥŵ��ұ߲������飨�����ϸ��˵�����ǿɱ����Ľṹ���μ���Iterator��һ�£���
// ��ô���ᱨ��
//[ģʽƥ��]
//��ȫ�⹹
let [a, b, c] = [1, 3, 45];
console.log(a);
console.log(b);
let [aa, [[bb], cc]] = [2, [[23], 12]];
console.log(bb);
//����⹹���ɹ���������ֵ�͵���undefined��
let [foo] = [];
console.log(foo);
//����ȫ�⹹
let [x, y] = [1, 2, 3];
console.log(x + y);
let [xx, [[yy], zz]] = [2, [[12, 13], 10]];
console.log(yy);  //12