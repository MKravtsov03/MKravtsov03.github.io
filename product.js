/* eslint-disable */

const ProductStyles = () =>
    function (values) {
        return `
        * {
            box-sizing: border-box;
        }
        .products-grid {
            gap: 20px;
            flex-wrap: wrap;
        }
        .products-grid.two-columns {
            display: flex;
            gap: 15px;
        }
        .products-grid.two-columns .product-card {
            width: calc(50% - 8px);
        }
        
        .products-grid.two-columns--reverse {
            display: flex;
            gap: 15px;
        }
        .products-grid.two-columns--reverse  .product-card {
             width: calc(50% - 8px);
        }
        .products-grid.two-columns--reverse  .product-card:nth-child(odd) .product-card__inner {
             order: -1;
             padding-top: 15px;
        }
        
        .products-grid.three-columns {
            display: flex;
            gap: 10px;
        }
        .products-grid.three-columns  .product-card {
             width: calc(33.33333% - 7px);
        }
        
        .product-card {
          position: relative;
          gap: 15px;
          min-width: 0;
          word-wrap: break-word;
          background-color: #fff;
          background-clip: border-box;
          border: 1px solid rgba(0,0,0,.125);
          border-radius: .25rem;
          text-align: center;
          display: flex;
          flex-direction: column;
        }

        .product-card-body {
          padding: 0 1rem 1rem;
          text-align: left;
        }

        .product-card-body h3 {
          margin: 0.7rem 0;
        }

        .product-card img {
          max-width: 100%;
          object-fit: contain;
          border-top-left-radius: 0.25rem;
          border-top-right-radius: 0.25rem;
        }
        
        .product-title {
            text-align: center;
            font-size: 24px;
            font-weight: 700;
            padding: 0 10px;
        }
         .products-grid.two-columns .product-title,
         .products-grid.two-columns--reverse .product-title {
            font-size: 19px;
         }
         .products-grid.three-columns .product-title {
            font-size: 14px;
         }
        
        .product-price {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 15px;
            padding: 0 10px;
            font-size: 18px;
            font-weight: 500;
        }
        .price-old {
            color: #98A2B3;
            text-decoration: line-through;
        }
        
        .product-description {
            padding: 0 10px;
        }
        .products-grid.three-columns .product-description {
            font-size: 12px;
         }
        
        .product-card .product-footer {
          display: flex;
          justify-content: center;
          padding: 15px;
          align-items: center;
          font-weight: bold;
        }

        .product-card .product-footer > div, .product-card .product-footer > .button{
          width: 200px;
          max-width: 100%;
        }

        .product-card .product-footer > div {
          border-bottom-left-radius: 0.25rem;
        }

        .button {
          font-weight: 400;
          color: #ffffff;
          text-align: center;
          vertical-align: middle;
          background-color: #000;
          border: 1px solid #0c54c9;
          border-radius: 8px;
          padding: .75rem;
          font-size: 1rem;
          line-height: 1.5;
          transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
          cursor: pointer;
        }

        .m-0 {
          margin: 0px;
        }

        .no-underline {
          text-decoration: none;
        }

        .no-border-radius {
          border-radius: 0px;
        }
        
        .product-details-inner {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
        }
        
        .details-item {
          width: 50%;
        }
        
        .details-item label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 500;
          font-size: 14px;
          color: #344054;
        }
        
        .product-type {
            text-align: left;
            color: #344054;
            font-size: 16px;
            padding: 5px 15px;
        }
        .product-description {
            line-height: 175%;
        }
        
        
        .selectMultiple {
             width:100%;
             position: relative;
        }
         .selectMultiple select {
            display: none;
        }
        .selectMultiple .active {
           cursor: pointer;
           display: flex;
           align-items: center;
           flex-wrap: wrap;
        }
      
         .selectMultiple > div {
             position: relative;
             z-index: 2;
             padding: 8px 12px 2px 12px;
             background: #fff;
             font-size: 14px;
             font-weight: 500;
             min-height: 40px;
             color: #344054;
             box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
             border-radius: 6px;
             border: 1px solid #D0D5DD;
             transition: box-shadow 0.3s ease;
        }
         .selectMultiple > div:hover {
            box-shadow: 0 4px 24px -1px rgba(22, 42, 90, .16);
        }
         .selectMultiple > div .arrow {
             right: 1px;
             top: 0;
             bottom: 0;
             cursor: pointer;
             width: 28px;
             position: absolute;
        }
         .selectMultiple > div .arrow:before, .selectMultiple > div .arrow:after {
             content: '';
             position: absolute;
             display: block;
             width: 2px;
             height: 8px;
             border-bottom: 8px solid #344054;
             top: 43%;
             transition: all 0.3s ease;
        }
         .selectMultiple > div .arrow:before {
             right: 12px;
             transform: rotate(-130deg);
        }
         .selectMultiple > div .arrow:after {
             left: 9px;
             transform: rotate(130deg);
        }
         .selectMultiple > div span {
             color: #99a3ba;
             display: block;
             position: absolute;
             left: 12px;
             cursor: pointer;
             top: 9px;
             transition: all 0.1s ease;
             pointer-events: none;
        }
         .selectMultiple > div span.hide {
             opacity: 0;
             visibility: hidden;
             transform: translate(-4px, 0);
        }
         .selectMultiple > div a {
             position: relative;
             padding: 0 24px 6px 8px;
             line-height: 28px;
             color: #1e2330;
             display: inline-block;
             vertical-align: top;
             margin: 0 6px 0 0;
        }
         .selectMultiple > div a em {
             font-style: normal;
             display: block;
             white-space: nowrap;
        }
         .selectMultiple > div a:before {
             content: '';
             left: 0;
             top: 0;
             bottom: 6px;
             width: 100%;
             position: absolute;
             display: block;
             background: rgba(228, 236, 250, .7);
             z-index: -1;
             border-radius: 4px;
        }
         .selectMultiple > div a i {
             cursor: pointer;
             position: absolute;
             top: 0;
             right: 0;
             width: 24px;
             height: 28px;
             display: block;
        }

         .selectMultiple > div a i:before, .selectMultiple > div a i:after {
             content: '';
             display: block;
             width: 2px;
             height: 10px;
             position: absolute;
             left: 50%;
             top: 50%;
             background: #0b68ff;
             border-radius: 1px;
        }
         .selectMultiple > div a i:before {
            transform: translate(-50%, -50%) rotate(45deg);
        }
         .selectMultiple > div a i:after {
            transform: translate(-50%, -50%) rotate(-45deg);
        }
         .selectMultiple > ul {
             margin: 0;
             padding: 0;
             list-style: none;
             font-size: 16px;
             z-index: 1;
             position: absolute;
             top: 100%;
             left: 0;
             right: 0;
             visibility: hidden;
             opacity: 0;
             border-radius: 8px;
             transform: translate(0, 20px) scale(0.8);
             transform-origin: 0 0;
             box-shadow: 0 12px 20px rgba(22, 42, 90, .08);
             transition: all 0.4s ease, transform 0.4s cubic-bezier(0.87, -0.41, 0.19, 1.44), filter 0.3s ease 0.2s;
             z-index: 3;
             max-height: 200px;
             overflow-y: scroll;
        }
        
        .selectMultiple > ul .list-item {
          color: #1e2330;
          background: #fff;
          padding: 12px 16px;
          cursor: pointer;
          overflow: hidden;
          position: relative;
          transition: background 0.3s ease, color 0.3s ease, transform 0.3s ease 0.3s, opacity 0.5s ease 0.3s, border-radius 0.3s ease;
          &.hide {
            display: none;
          }
        }
        
        .selectMultiple > ul .search-item {
          padding: 0 16px;
          background: #fff;
          position: relative;
          border-bottom: 1px solid #D0D5DD;
        }
        
        .selectMultiple > ul .search-item input {
          border: none;
          height: 37px;
          padding: 0 10px 0 25px;
          font-size: 14px;
          width: 100%;
          outline: none;
        }
        .selectMultiple > ul .search-item svg {
          position: absolute;
          left: 15px;
          top: 9px;
        }
        
        .selectMultiple > ul li.hide {
            display: none;
        }
         .selectMultiple > ul li:first-child {
            border-radius: 8px 8px 0 0;
        }
         .selectMultiple > ul li:first-child:last-child {
            border-radius: 8px;
        }
         .selectMultiple > ul li:last-child {
            border-radius: 0 0 8px 8px;
        }
         .selectMultiple > ul li:last-child:first-child {
            border-radius: 8px;
        }
         .selectMultiple > ul .list-item:hover {
             background: #0b68ff;
             color: #fff;
        }
         .selectMultiple > ul li:after {
             content: '';
             position: absolute;
             top: 50%;
             left: 50%;
             width: 6px;
             height: 6px;
             background: rgba(0, 0, 0, .4);
             opacity: 0;
             border-radius: 100%;
             transform: scale(1, 1) translate(-50%, -50%);
             transform-origin: 50% 50%;
        }
         .selectMultiple.open > div {
            box-shadow: 0 4px 20px -1px rgba(22, 42, 90, .12);
        }
         .selectMultiple.open > div .arrow:before {
            transform: rotate(-50deg);
        }
         .selectMultiple.open > div .arrow:after {
            transform: rotate(50deg);
        }
         .selectMultiple.open > ul {
             transform: translate(0, 12px) scale(1);
             opacity: 1;
             visibility: visible;
             filter: drop-shadow(0 16px 24px rgba(22, 42, 90, .16));
        }
        .layout-list {
            display: flex;
            align-items: center;
            gap: 16px
        }
        .layout-list label {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 48px;
            height: 48px;
            padding: 5px;
            border: 1px solid #D0D5DD;
            border-radius: 6px;
            cursor: pointer;
            overflow: hidden;
        }
        .layout-list img {
            max-width: 100%;
            position: relative;
            z-index: 2;
        }
        .layout-list label span {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            transition: all 0.3s ease-in-out;
        }
        .layout-list label.disabled {
           pointer-events: none;
           opacity: 0.6;
        }
        .layout-list input {
            width: 0;
            height: 0;
            opacity: 0;
        }
        .layout-list input:checked + span {
            background: #F4FAFF;
        }
`;
    };

const CouponStyles = () =>
    function (values) {
        return `
            .coupon-wrapper {
                text-align: center;
                padding: 15px;
            }
            
            .coupon-title {
                font-size: 24px;
                font-weight: 600;
            }
            
            .coupon-description {
                line-height: 16px;
                font-size: 14px;
                margin-bottom: 20px;
            }
            
            .coupon-value {
                font-family: 'Rubik', sans-serif;
                font-size: 22px;
                font-weight: 600;
                color: #0B68FF;
                margin-bottom: 20px;
            }
            
            .button {
              font-weight: 400;
              color: #ffffff;
              text-align: center;
              vertical-align: middle;
              background-color: #000;
              border: 1px solid #0c54c9;
              border-radius: 8px;
              padding: .75rem;
              font-size: 1rem;
              line-height: 1.5;
              transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
              cursor: pointer;
            }
            
            .no-underline {
              text-decoration: none;
            }
        `
    }

const getProductTemplate = () =>
    function (values) {
        const products = values?.productContent?.products.length
            ?
            values?.productContent?.products
            :
            [values?.data?.products[0]?.id];
        const { layout } = values?.productContent
        console.log(values)
        const productTitleRenderer = (product) => `
            <div class="product-title">${product?.productTitle || 'Product Title'}</div> 
        `;

        const productPriceRenderer = (product) => `
           <div class="price">${product?.price && (product?.price)} $</div>
        `;

        const productComparisonPriceRenderer = (product) => product?.comparisonPrice ? `
            <div class="price-old">${product?.comparisonPrice} $</div>
        ` : '';

        const productDescriptionRenderer = (product) => `
            <div class="product-description">${product?.description || ''}</div>
        `;

        const productTypeRenderer = (product) => `
            <div class="product-type">${product?.productType}</div>
        `;

        const productButtonRenderer = (product, values) => `
            <a class="button no-underline" href="${product?.link}" target="_blank">${values.productCTA}</a>
        `;

        const productImageRenderer = (product) => `
            <img alt="" src="${product?.productImage?.src || 'https://b-tm.com.ua/assets/galleries/105/noimage.png'}" />
        `;

        return `
        <div class="products-grid ${layout}">
            ${products.map(productId => {
                const currentProduct = values.data.products.find((product) => product.id === +productId);
                return `
                        <div class="product-card">
                            
                            ${values?.details?.image ? productImageRenderer(currentProduct) : ''}
                           
                            <div class="product-card__inner">
                                ${values?.details?.title ? productTitleRenderer(currentProduct) : ''}
                                ${values?.details?.productType ? productTypeRenderer(currentProduct) : ''}
                                <div class="product-price">
                                    ${
                                        values?.details?.price ? productPriceRenderer(currentProduct) : ''
                                    }
                                                    ${
                                        values?.details?.comparisonPrice
                                            ? productComparisonPriceRenderer(currentProduct)
                                            : ''
                                    }
                                </div>
                                ${values?.details?.description ? productDescriptionRenderer(currentProduct) : ''}
                                <div class="product-footer">
                                     ${values?.details?.button ? productButtonRenderer(currentProduct, values) : ''}
                                </div> 
                            </div>
                        </div>
                        `
                }).join('')
            }
        </div>
        `
    }

const productToolTemplate = getProductTemplate()

const detailsLabelsMap = {
    button: 'Button',
    comparisonPrice: 'Comparison Price',
    description: 'Description',
    image: 'Image',
    price: 'Price',
    productType: 'Product type',
    title: 'Title',
}

const productSelect = (value, data) => {
    console.log(value)
    return `
<div class="blockbuilder-widget-label">
    <p class="blockbuilder-label-primary">Product Data</p>
</div>
<select multiple data-placeholder="Select products">
    ${data?.options.map(option => 
        `
            <option ${value.products.includes(option.value.toString()) ? 'selected': ''} class="prodOption" value="${option.value}">
                ${option.label}
            </option>
        `
    )}
</select>
`
}

const renderDetails = (options, values) => `
<div class="product-details">
    <div class="blockbuilder-widget-label">
        <p class="blockbuilder-label-primary">Details</p>
    </div>
    <div class="product-details-inner">
        ${
            options.map(option => (`
            <div class="details-item">
            <label>
                <input ${values[option] ? 'checked' : ''} name="${option}" type="checkbox">
                <span>${detailsLabelsMap[option]}</span>
            </label>
            </div>`)).join('')
        }
    </div>
</div>
`

const layoutsList = (layouts) => {
    return `
    <div class="blockbuilder-widget-label">
        <p class="blockbuilder-label-primary">Layout</p>
    </div>
    <div class="layout-list">
        ${
        layouts.map(layout => `
                 <label class="${layout.disabled ? 'disabled' : '' } ${layout.value}">
                    <img src="https://mkravtsov03.github.io/${layout.value}.svg" alt="">
                    <input type="radio" value="${layout.value}" ${layout.active ? 'checked' : ''} name="layout">
                    <span></span>
                </label>
            `).join('')
    }
    </div>
`
}


getCouponTemplate = () => function (values) {
    console.log(values)
    const { data: { coupons }, coupon } = values;
    const activeCoupon = coupons.find(currentCoupon => currentCoupon.id == coupon)
    const renderDescription = () => `
            <div class="coupon-description">
                This coupon will give you ${activeCoupon?.value}% discount in period from ${new Date(activeCoupon?.starts_at).toLocaleDateString()} to ${new Date(activeCoupon?.ends_at).toLocaleDateString()}
            </div>`
    return (
    `
        <div class="coupon-wrapper">
            <div class="coupon-title">
                Use coupon for Discount
            </div>
            ${coupon ? renderDescription() : ''}
            <div class="coupon-value"> 
                ${(activeCoupon?.title || 'XXXXXXXXXXXX').match(/.{1,4}/g).join('-')}
            </div>
<!--             <a class="button no-underline" href="" target="_blank"></a>-->
        </div>
    `
    )
}

const couponToolTemplate = getCouponTemplate();

unlayer.registerTool({
    name: 'product_tool',
    label: 'Product',
    icon: 'https://mkravtsov03.github.io/product-icon.svg',
    supportedDisplayModes: ['web', 'email'],
    options: {
        productContent: {
            title: 'Product Content',
            position: 1,
            options: {
                productContent: {
                   label: 'Product',
                   defaultValue: {layout: 'one-column', products: []},
                   widget: 'product_content',
                },
                layout: {
                   label: 'layout',
                   defaultValue: [
                                    {active: true, value: 'one-column', disabled: false},
                                    {active: false, value: 'two-columns', disabled: false},
                                    {active: false, value: 'two-columns--reverse', disabled: false},
                                    {active: false, value: 'three-columns', disabled: true},
                                ],
                   widget: 'layout',
                },
                details: {
                   label: 'Details',
                   defaultValue: {title: false, comparisonPrice: false, image: true, price: false, description: false, productType: false, button: true},
                   widget: 'product_details',
                },
                productCTA: {
                  label: 'Button Content',
                  defaultValue: 'Buy it Now',
                  widget: 'text',
                },
                btnBorder: {
                  label: 'Button border',
                  defaultValue: '',
                  widget: 'border',
                },
            },
        },
    },
    transformer: (values, source) => {
        const { name, value, data } = source;
        let newValues = values
        if (name === 'layout') {
            newValues = {
                ...values,
                productContent: {...values.productContent, layout: value.find(layout => layout.active === true).value}
            }
        }

        return newValues
    },
    propertyStates: (values) => {
        if ( values.productContent.products.length > 2) {
            const newLayouts = [...values.layout]
            newLayouts[3].disabled = false
            return {
                layout: {
                    value: newLayouts
                }
            }
        } else if ( values.productContent.products.length <= 2) {
            const newLayouts = [...values.layout]
            newLayouts[3].disabled = true
            return {
                layout: {
                    value: newLayouts
                }
            }
        }
    },
    renderer: {
        Viewer: unlayer.createViewer({
            render(values) {
                return productToolTemplate(values);
            },
        }),
        exporters: {
            web: function (values) {
                return productToolTemplate(values);
            },
            email: function (values) {
                return productToolTemplate(values);
            },
        },
        head: {
            css: ProductStyles(),
            js: function (values) {},
        },
    },
})

unlayer.registerTool({
    name: 'coupon_tool',
    label: 'Coupon',
    icon: 'https://mkravtsov03.github.io/coupon-icon.svg',
    supportedDisplayModes: ['web', 'email'],
    options: {
        coupon: {
            title: 'Coupon',
            position: 1,
            options: {
                coupon: {
                    label: 'Coupon',
                    defaultValue: '',
                    widget: 'dropdown',
                },
                couponBtn: {
                    label: 'Button Content',
                    defaultValue: 'Buy it Now',
                    widget: 'text',
                },
            },
        },
    },
    renderer: {
        Viewer: unlayer.createViewer({
            render(values) {
                return couponToolTemplate(values);
            },
        }),
        exporters: {
            web: function (values) {
                return couponToolTemplate(values);
            },
            email: function (values) {
                return couponToolTemplate(values);
            },
        },
        head: {
            css: CouponStyles(),
            js: function (values) {},
        },
    },
})

unlayer.registerPropertyEditor({
    name: 'product_details',
    layout: 'bottom',
    Widget: unlayer.createWidget({
        render(value) {
            const options = Object.keys(value)
            return renderDetails(options, value)
        },
        mount(node, value, updateValue, data) {
            optionsList = document.querySelectorAll('.product-details input');
            const details = {...value}
            optionsList.forEach(item => {
                item.onchange = function(e) {
                     details[e.target.name] = e.target.checked
                     return updateValue({...details})
                }
            })
        }
    })
});

unlayer.registerPropertyEditor({
    name: 'layout',
    layout: 'bottom',
    Widget: unlayer.createWidget({
        render(value) {
            return layoutsList(value)
        },
        mount(node, value, updateValue) {
            layoutsOptions = document.querySelectorAll('.layout-list input');
            const layouts = [...value];
            const newLayouts = []
            layoutsOptions.forEach((item, i) => {
                newLayouts.push({...layouts[i], active: false})
                item.onchange = function(e) {
                    const layoutIndex = newLayouts.findIndex(item => item.value === e.target.value)
                    newLayouts[layoutIndex].active = e.target.checked
                    console.log({layouts, layoutIndex})
                    return updateValue(newLayouts)
                }
            })
        }
    })
});

unlayer.registerPropertyEditor({
    name: 'product_content',
    layout: 'bottom',
    Widget: unlayer.createWidget({
        render( value, updateValue, data) {
            return productSelect(value, data)
        },
        mount(node, value, updateValue) {

            const handleClickListItem = (e) => {
                const li = e.target.closest('.list-item');

                const select = li.closest('.selectMultiple');
                select.classList.add('clicked');

                const a = document.createElement('a');
                a.dataset.value = li.dataset.value;
                a.innerHTML = `<em>${li.innerText}</em><i></i>`;
                a.classList.add('notShown');

                select.querySelector('div').appendChild(a);

                Array.from(document.getElementsByClassName('prodOption')).forEach((option) => {
                        if (option.value === li.dataset.value) {
                            option.selected = true
                            document.querySelector('select[multiple]').dispatchEvent(new Event('change'))
                        }
                    }
                )

                li.remove();

                select.querySelector('span').classList.add('hide');
                select.classList.remove('clicked');
            }

            const handleClickSelectedItem = (e) => {
                const a = e.target.closest('a');
                const select = e.target.closest('.selectMultiple');

                if (!a) {
                    return;
                }

                a.className = '';
                a.classList.add('remove');
                select.classList.add('open');
                const selectEl = select.querySelector('select');

                Array.from(document.getElementsByClassName('prodOption')).forEach((option) => {
                        if (option.value === a.dataset.value) {
                            option.selected = false
                            document.querySelector('select[multiple]').dispatchEvent(new Event('change'))
                        }
                    }
                )

                const li = document.createElement('li');
                li.dataset.value = a.dataset.value;
                li.classList.add('list-item');
                li.innerText = a.querySelector('em').innerText;
                select.querySelector('ul').appendChild(li);

                if (!selectEl.selectedOptions.length) {
                    select.querySelector('span').classList.remove('hide');
                }

                a.remove();
            }

            document.querySelector('select[multiple]').onchange = function() {
                const newVal = []
                Array.from(document.getElementsByClassName('prodOption')).forEach(option => {
                    if(option.selected) {
                        newVal.push(option.value)
                    }
                })
                updateValue({...value, products: newVal})
                const layoutItem = document.querySelector('.layout-list .three-columns')
                if (newVal.length > 2) {
                    layoutItem.classList.remove('disabled')
                } else {
                    layoutItem.classList.add('disabled')
                }
            }

            if (!document.querySelector('.selectMultiple')) {
                const select = document.querySelector('select[multiple]');
                const selectOptions = document.getElementsByClassName('prodOption');

                const newSelect = document.createElement('div');
                newSelect.classList.add('selectMultiple');

                const active = document.createElement('div');
                active.classList.add('active');

                const search = document.createElement('input');
                search.classList.add('search-field');
                search.setAttribute('placeholder', 'Search Products');

                const optionList = document.createElement('ul');
                const placeholder = select.dataset.placeholder;

                const searchItem =  document.createElement('li');
                searchItem.classList.add('search-item');
                searchItem.innerHTML = '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                    '<path d="M16.5 16.5L12.875 12.875M14.8333 8.16667C14.8333 11.8486 11.8486 14.8333 8.16667 14.8333C4.48477 14.8333 1.5 11.8486 1.5 8.16667C1.5 4.48477 4.48477 1.5 8.16667 1.5C11.8486 1.5 14.8333 4.48477 14.8333 8.16667Z" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                    '</svg>'
                searchItem.appendChild(search)

                const placeholderElement = document.createElement('span');
                placeholderElement.innerText = placeholder;
                placeholderElement.classList.add('placeholder');
                active.appendChild(placeholderElement);
                optionList.appendChild(searchItem);


                search.addEventListener('keyup', (e) => {
                    let newOptions = document.querySelectorAll('.selectMultiple ul .list-item')
                    if (e.target.value) {
                        newOptions.forEach(function (item) {
                            if (!item.innerText.toLowerCase().includes(e.target.value.toLowerCase())) {
                                item.classList.add('hide')
                            } else {
                                item.classList.remove('hide')
                            }
                        })
                        return
                    }
                    newOptions.forEach(function (item) {
                        item.classList.remove('hide')
                    })
                })

                Array.from(selectOptions).forEach(
                    function(option) {
                        let text = option.innerText;

                        if (option.selected) {
                            let tag = document.createElement('a');
                            tag.dataset.value = option.value;
                            tag.innerHTML = `<em>${text}</em><i></i>`;
                            active.appendChild(tag);
                            placeholderElement.classList.add('hide');
                        } else {
                            const item = document.createElement('li');
                            item.classList.add('list-item');
                            item.dataset.value = option.value;
                            item.innerHTML = text;
                            optionList.appendChild(item);
                        }
                    }
                );

                const arrow = document.createElement('div');
                arrow.classList.add('arrow');
                active.appendChild(arrow);

                newSelect.appendChild(active);
                newSelect.appendChild(optionList);

                select.parentElement.append(newSelect);
                placeholderElement.appendChild(select);

                document.querySelector('.selectMultiple ul').removeEventListener('click', handleClickListItem);
                document.querySelector('.selectMultiple > div').removeEventListener('click', handleClickSelectedItem);

                document.querySelector('.selectMultiple ul').addEventListener('click', handleClickListItem);
                document.querySelector('.selectMultiple > div').addEventListener('click', handleClickSelectedItem);

                document.querySelectorAll('.selectMultiple > div, .selectMultiple > div span').forEach((el) => {
                    el.addEventListener('click', (e) => {
                        el.closest('.selectMultiple').classList.toggle('open');
                    });
                });

                document.addEventListener('mouseup', function (e) {
                    const container = document.querySelector('.selectMultiple');
                    if (!container.contains(e.target)) {
                        container.classList.remove('open')
                    }
                });

            }

        }
    })
});
