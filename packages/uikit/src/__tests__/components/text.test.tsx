import React from "react";
import { renderWithTheme } from "../../testHelpers";
import Text from "../../components/Text/Text";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<Text>novo</Text>);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      .c0 {
      color: #280D5F;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5;
    }

    <div
        class="c0"
        color="text"
      >
        novo
      </div>
    </DocumentFragment>
  `);
});
