import nextNode from '../query/nextNode'
import parent from '../query/parent'
import before from './before'

export default function after (node, refNode) {
  return before(node, nextNode(refNode), parent(refNode))
}