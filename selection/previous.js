import indexOf from 'anticore-core/Array/indexOf'
import parent from '../query/parent'
import end from './end'

export default function previous (node, targets) {
  let key = indexOf(targets, node)

  node = targets[key -= 1]

  while (node) {
    if (parent(node)) {
      return end(node)
    }

    node = targets[key -= 1]
  }
}
