<script lang="ts">
import snarkdown from "snarkdown"
import sanitizeHtml from "sanitize-html"
// NB: Tables are not yet supported in snarkdown.

export default defineComponent({
  props: {
    content: {
      type: String,
      required: true,
    },
    isHTML: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    const markdown = computed(() => props.content)

    const processedContent = computed(() => {
      if (props.isHTML) {
        // If content is HTML, sanitize it
        return sanitizeHtml(markdown.value, {
          allowedAttributes: {
            ...sanitizeHtml.defaults.allowedAttributes,
            div: ["class"],
          },
        })
      } else {
        // If content is markdown, convert it to HTML (without sanitization)
        return snarkdown(markdown.value)
      }
    })

    return () => h("div", { innerHTML: processedContent.value })
  },
})
</script>
<style scoped lang="scss">
:deep(a) {
  @apply underline;
}
</style>
