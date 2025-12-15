import { post } from './schemas/post'
import { project } from './schemas/project'
import { faq } from './schemas/faq'
import { homepage } from './schemas/homepage'

export const schema = {
    types: [post, project, faq, homepage],
}
